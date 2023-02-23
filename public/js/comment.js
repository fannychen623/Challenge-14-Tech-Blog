const newCommentHandler = async (event) => {
  event.preventDefault();

  const comments = document.querySelector('#blog-comment').value.trim();
  const blog_id = document.getElementById('comment-blog').getAttribute('data-id');

  if (comments) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comments, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to comment on blog');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);