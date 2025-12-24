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
    division_context = f" related to {context}" if context else ""
    
    if field == "subject":
        prompts = {
            "suggest": f"""You are a professional writing assistant. Generate a clear, concise subject line{division_context}.
Keep it under 10 words. Be specific and professional.
Return ONLY the subject line, nothing else.""",
            
            "concise": f"""Make this subject line shorter and more direct while keeping the key message.
Return ONLY the improved subject line, nothing else.""",
            
            "rephrase": f"""Rephrase this subject line to be clearer and more professional.
Return ONLY the new subject line, nothing else.""",
            
            "formal": f"""Rewrite this subject line in a formal, business tone.
Return ONLY the formal subject line, nothing else.""",
            
            "friendly": f"""Rewrite this subject line in a friendly yet professional tone.
Return ONLY the friendly subject line, nothing else.""",
        }
    else:  # message
        prompts = {
            "suggest": f"""You are a professional writing assistant helping someone write to LAPS Group{division_context}.
If they've started writing, improve and complete their message professionally. 
If they haven't started, generate a brief, natural message (2-3 sentences).
Be direct and helpful. No placeholders like [Name] or [Company]. 
Return ONLY the message text.""",
            
            "concise": f"""Make this message more concise while keeping the key points.
Return ONLY the improved message, nothing else.""",
            
            "rephrase": f"""Rephrase this message to be clearer and more professional.
Maintain the original meaning but improve the wording.
Return ONLY the rephrased message, nothing else.""",
            
            "formal": f"""Rewrite this message in a formal, business-appropriate tone.
Return ONLY the formal message, nothing else.""",
            
            "friendly": f"""Rewrite this message in a friendly, approachable tone while maintaining professionalism.
Return ONLY the friendly message, nothing else.""",
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
        
        # Better user prompts for empty text
        if request.text.strip():
            user_prompt = request.text
        else:
            if request.field == "subject":
                context_msg = f"for a {request.context} inquiry" if request.context else "for a general inquiry"
                user_prompt = f"Generate a subject line {context_msg}"
            else:  # message
                context_msg = f"expressing interest in {request.context} services" if request.context else "for a general inquiry"
                user_prompt = f"Generate a brief message {context_msg}"
        
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
