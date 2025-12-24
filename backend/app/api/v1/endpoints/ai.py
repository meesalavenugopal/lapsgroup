"""
AI Assistant Endpoints for Contact Form
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Literal
import openai
from app.core.config import settings

router = APIRouter()


class AIAssistRequest(BaseModel):
    """Request model for AI assistance"""
    text: str
    action: Literal["suggest", "concise", "rephrase", "formal", "friendly"]
    field: Literal["subject", "message"]
    context: Optional[str] = None  # Additional context like division


class AIAssistResponse(BaseModel):
    """Response model for AI assistance"""
    original: str
    suggestion: str
    action: str


def get_system_prompt(action: str, field: str, context: Optional[str] = None) -> str:
    """Generate system prompt based on action and field"""
    division_context = f" for {context} division" if context else ""
    
    prompts = {
        "suggest": f"""You are a professional writing assistant for LAPS Group, a multi-division company. 
Generate a clear and professional {field}{division_context}. 
LAPS Group operates in Architecture & Planning, Apps & Platforms, Ads & Services, Suites & Events, and Photo Studio divisions.
Return only the suggested text, nothing else.""",
        
        "concise": f"""You are a professional editor. Make the following {field} more concise and to the point while keeping the key message.
Return only the improved text, nothing else.""",
        
        "rephrase": f"""You are a professional writing assistant. Rephrase the following {field} to be clearer and more professional.
Maintain the original meaning but improve the wording.
Return only the rephrased text, nothing else.""",
        
        "formal": f"""You are a professional writing assistant. Rewrite the following {field} in a formal, business-appropriate tone.
Return only the formal version, nothing else.""",
        
        "friendly": f"""You are a professional writing assistant. Rewrite the following {field} in a friendly, approachable tone while maintaining professionalism.
Return only the friendly version, nothing else.""",
    }
    
    return prompts.get(action, prompts["rephrase"])


@router.post("/assist", response_model=AIAssistResponse)
async def ai_assist(request: AIAssistRequest):
    """
    AI-powered text assistance for contact form fields.
    
    Actions:
    - suggest: Generate a new suggestion based on minimal input
    - concise: Make the text more concise
    - rephrase: Rephrase for clarity
    - formal: Make more formal
    - friendly: Make more approachable
    """
    if not settings.OPENAI_API_KEY:
        raise HTTPException(status_code=503, detail="AI service not configured")
    
    if len(request.text.strip()) < 2 and request.action != "suggest":
        raise HTTPException(status_code=400, detail="Text too short for this action")
    
    try:
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)
        
        system_prompt = get_system_prompt(request.action, request.field, request.context)
        
        user_prompt = request.text if request.text.strip() else f"Generate a professional {request.field} for a general inquiry"
        
        response = client.chat.completions.create(
            model=settings.OPENAI_MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            max_tokens=settings.OPENAI_MAX_TOKENS,
            temperature=settings.OPENAI_TEMPERATURE,
        )
        
        suggestion = response.choices[0].message.content.strip()
        
        # Clean up suggestion - remove quotes if present
        if suggestion.startswith('"') and suggestion.endswith('"'):
            suggestion = suggestion[1:-1]
        if suggestion.startswith("'") and suggestion.endswith("'"):
            suggestion = suggestion[1:-1]
        
        return AIAssistResponse(
            original=request.text,
            suggestion=suggestion,
            action=request.action
        )
        
    except openai.APIConnectionError:
        raise HTTPException(status_code=503, detail="Could not connect to AI service")
    except openai.RateLimitError:
        raise HTTPException(status_code=429, detail="AI service rate limit exceeded")
    except openai.APIStatusError as e:
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")


@router.get("/suggestions/subjects")
async def get_subject_suggestions():
    """Get pre-defined subject suggestions"""
    return {
        "suggestions": [
            "General Inquiry",
            "Request for Quote",
            "Partnership Opportunity",
            "Project Consultation",
            "Career Inquiry",
            "Media & Press Inquiry",
            "Technical Support",
            "Feedback & Suggestions",
        ]
    }
