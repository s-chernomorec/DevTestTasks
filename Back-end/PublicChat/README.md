# Short Description
The NodeJS app - a simple public chat. Where unauthenticated users can post text and everyone else can read them.
Posts stored in database, and users can get or create posts by using REST API.

# Basic requirements
- Post must contain username and text.
- Before save a post check that text is less than 200 symbols and username contains only letters and numbers.
- REST API should have 2 endpoints:
  1. Get all posts.
  2. Create post. Should return error if text or username failed validation.

# Additional requirements
- Preferably use SQLite with in-memory mode as database and Express as REST API.
- Write tests for endpoints, so we can easily make sure that API is work. (or add a postman collection)
- Use Sequelize or another ORM.
