"""Test script to render all email templates with sample data"""
import os
from jinja2 import Environment, FileSystemLoader

# Setup Jinja2 environment
template_dir = os.path.join(os.path.dirname(__file__), "templates")
output_dir = os.path.join(os.path.dirname(__file__), "template_previews")
os.makedirs(output_dir, exist_ok=True)

env = Environment(loader=FileSystemLoader(template_dir))

# Sample data for each template
templates_data = {
    "contact_confirmation.html": {
        "subject": "Contact Confirmation - LAPS Group",
        "header_tag": "Confirmation",
        "name": "John Smith",
        "email": "john.smith@example.com",
        "phone": "+91 98765 43210",
        "company": "Tech Innovations Ltd",
        "message": "Hello,\n\nI'm interested in learning more about your Infrastructure division services.\n\nCould you please provide details about your construction management capabilities?\n\nBest regards,\nJohn",
        "reference_id": "#LAPS-2024-1234"
    },
    "contact_notification.html": {
        "subject": "New Contact Form Submission",
        "header_tag": "Admin Alert",
        "name": "Sarah Johnson",
        "email": "sarah.j@techcorp.com",
        "phone": "+91 87654 32109",
        "company": "TechCorp Solutions",
        "division": "Technology",
        "timestamp": "Dec 24, 2024 - 10:30 AM",
        "message": "Hi Team,\n\nWe are looking for a technology partner for our upcoming digital transformation project.\n\nPlease share your portfolio and pricing details.\n\nThanks,\nSarah"
    },
    "newsletter_welcome.html": {
        "subject": "Welcome to LAPS Group Newsletter",
        "header_tag": "Newsletter",
        "name": "Alex Kumar"
    },
    "job_application_confirmation.html": {
        "subject": "Application Received - LAPS Group",
        "header_tag": "Careers",
        "name": "Priya Sharma",
        "position": "Senior Software Engineer",
        "division": "LAPS Technology",
        "reference_id": "APP-2024-5678"
    },
    "meeting_confirmation.html": {
        "subject": "Meeting Confirmed - LAPS Group",
        "header_tag": "Meeting",
        "name": "Michael Chen",
        "date": "Dec 27, 2024",
        "time": "2:00 PM",
        "meeting_type": "Discovery Call",
        "duration": "45 minutes",
        "division": "LAPS Ventures",
        "meeting_link": "https://meet.google.com/abc-defg-hij",
        "host_name": "Rajesh Kumar",
        "host_title": "Business Development Manager"
    },
    "quote_request_confirmation.html": {
        "subject": "Quote Request Received - LAPS Group",
        "header_tag": "Quote",
        "name": "Emily Watson",
        "service_category": "Commercial Construction",
        "division": "LAPS Infrastructure",
        "project_type": "Office Building Development",
        "budget_range": "₹5-10 Crores",
        "requirements": "We need a complete turnkey solution for a 50,000 sq ft office building including:\n\n- Architectural design\n- Civil construction\n- MEP services\n- Interior fit-out\n- Landscaping\n\nTimeline: 18 months",
        "reference_id": "QR-2024-9012"
    }
}

print("🎨 Rendering email templates with sample data...\n")

for template_name, data in templates_data.items():
    try:
        template = env.get_template(template_name)
        html = template.render(**data)
        
        output_file = os.path.join(output_dir, template_name)
        with open(output_file, "w") as f:
            f.write(html)
        
        print(f"✅ {template_name} → template_previews/{template_name}")
    except Exception as e:
        print(f"❌ {template_name} → Error: {e}")

print(f"\n📁 All templates saved to: {output_dir}")
print("\n🌐 Open the HTML files in a browser to preview them!")
