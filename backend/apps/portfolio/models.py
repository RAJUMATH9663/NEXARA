from django.db import models

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('web', 'Web'),
        ('mobile', 'Mobile'),
        ('ai', 'AI'),
        ('ecommerce', 'E-commerce'),
        ('saas', 'SaaS'),
    ]
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='web')
    description = models.TextField()
    tech_stack = models.CharField(max_length=300, help_text="Comma-separated list of technologies")
    image = models.ImageField(upload_to='portfolio/', blank=True, null=True)
    image_url = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    github = models.URLField(blank=True)
    color = models.CharField(max_length=100, default="from-blue-500 to-cyan-500", help_text="Tailwind gradient classes")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
