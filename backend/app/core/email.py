"""
Email Service for sending emails with templates
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from typing import Dict, Any, Optional
from jinja2 import Environment, FileSystemLoader

from app.core.config import settings


# Set up Jinja2 template environment
TEMPLATE_DIR = Path(__file__).parent.parent.parent / "templates"
jinja_env = Environment(loader=FileSystemLoader(str(TEMPLATE_DIR)))


class EmailService:
    """Service for sending emails using SMTP"""

    def __init__(self):
        self.smtp_host = settings.SMTP_HOST
        self.smtp_port = settings.SMTP_PORT
        self.smtp_user = settings.SMTP_USER
        self.smtp_password = settings.SMTP_PASSWORD
        self.from_email = settings.EMAIL_FROM
        self.from_name = settings.EMAIL_FROM_NAME

    def _render_template(self, template_name: str, context: Dict[str, Any]) -> str:
        """Render an email template with the given context"""
        template = jinja_env.get_template(template_name)
        return template.render(**context)

    def _create_message(
        self,
        to_email: str,
        subject: str,
        html_content: str,
        text_content: Optional[str] = None,
    ) -> MIMEMultipart:
        """Create a multipart email message"""
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = f"{self.from_name} <{self.from_email}>"
        msg["To"] = to_email

        # Plain text fallback
        if text_content:
            msg.attach(MIMEText(text_content, "plain"))

        # HTML content
        msg.attach(MIMEText(html_content, "html"))

        return msg

    def send_email(
        self,
        to_email: str,
        subject: str,
        template_name: str,
        context: Dict[str, Any],
        text_content: Optional[str] = None,
    ) -> bool:
        """
        Send an email using a template
        
        Args:
            to_email: Recipient email address
            subject: Email subject
            template_name: Name of the template file (e.g., 'contact_confirmation.html')
            context: Dictionary of variables to pass to the template
            text_content: Optional plain text fallback
            
        Returns:
            True if email was sent successfully, False otherwise
        """
        if not self.smtp_user or not self.smtp_password:
            print("Email configuration not set. Skipping email send.")
            return False

        try:
            # Add subject to context for template use
            context["subject"] = subject
            
            # Render the template
            html_content = self._render_template(template_name, context)

            # Create the message
            msg = self._create_message(to_email, subject, html_content, text_content)

            # Send the email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_user, self.smtp_password)
                server.send_message(msg)

            print(f"Email sent successfully to {to_email}")
            return True

        except smtplib.SMTPAuthenticationError as e:
            print(f"SMTP Authentication Error: {e}")
            return False
        except smtplib.SMTPException as e:
            print(f"SMTP Error: {e}")
            return False
        except Exception as e:
            print(f"Error sending email: {e}")
            return False

    async def send_contact_confirmation(
        self,
        to_email: str,
        name: str,
        subject: str,
        message: str,
        division: Optional[str] = None,
    ) -> bool:
        """Send contact form confirmation to the user"""
        return self.send_email(
            to_email=to_email,
            subject=f"Thank you for contacting LAPS Group - {subject}",
            template_name="contact_confirmation.html",
            context={
                "name": name,
                "subject": subject,
                "message": message,
                "division": division,
            },
        )

    async def send_contact_notification(
        self,
        name: str,
        email: str,
        phone: Optional[str],
        subject: str,
        message: str,
        division: Optional[str],
        submitted_at: str,
    ) -> bool:
        """Send notification to admin about new contact form submission"""
        # Send to admin email (could be configured)
        admin_email = self.from_email
        
        return self.send_email(
            to_email=admin_email,
            subject=f"New Contact Form Submission: {subject}",
            template_name="contact_notification.html",
            context={
                "name": name,
                "email": email,
                "phone": phone,
                "subject": subject,
                "message": message,
                "division": division,
                "submitted_at": submitted_at,
            },
        )

    async def send_newsletter_welcome(
        self,
        to_email: str,
        unsubscribe_link: str = "#",
    ) -> bool:
        """Send welcome email to new newsletter subscriber"""
        return self.send_email(
            to_email=to_email,
            subject="Welcome to LAPS Group Newsletter!",
            template_name="newsletter_welcome.html",
            context={
                "unsubscribe_link": unsubscribe_link,
            },
        )

    async def send_job_application_confirmation(
        self,
        to_email: str,
        name: str,
        position: str,
        division: str,
        location: str,
        applied_at: str,
    ) -> bool:
        """Send confirmation email for job application"""
        return self.send_email(
            to_email=to_email,
            subject=f"Application Received - {position} at LAPS Group",
            template_name="job_application_confirmation.html",
            context={
                "name": name,
                "position": position,
                "division": division,
                "location": location,
                "applied_at": applied_at,
            },
        )


# Singleton instance
email_service = EmailService()
