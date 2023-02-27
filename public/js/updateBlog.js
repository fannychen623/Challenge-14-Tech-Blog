const updateBlogHandler = async (event) => {
  event.preventDefault();

  // Collect values from the update-blog form
  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();
  const id = document.getElementById('update-blog').getAttribute('data-id');

  if (title && content) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {

    // Collect values from the document attribute data-id
    const id = event.target.getAttribute('data-id');
    
    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard id page
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.update-blog-form')
  .addEventListener('submit', updateBlogHandler);

document
  .querySelector('.delete-blog')
  .addEventListener('click', delButtonHandler);