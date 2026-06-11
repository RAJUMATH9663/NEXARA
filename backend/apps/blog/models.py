from django.db import models
from django.utils.text import slugify

class BlogPost(models.Model):
    CATEGORY_CHOICES = [
        ('web', 'Web Development'),
        ('mobile', 'Mobile Dev'),
        ('ai', 'AI & Technology'),
        ('cloud', 'Cloud'),
        ('design', 'UI/UX Design'),
        ('business', 'Business'),
    ]
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True, blank=True)
    excerpt = models.TextField(max_length=500)
    content = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='web')
    author = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog/', blank=True, null=True)
    image_url = models.URLField(blank=True)
    is_published = models.BooleanField(default=False)
    read_time = models.IntegerField(default=5, help_text='Read time in minutes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
