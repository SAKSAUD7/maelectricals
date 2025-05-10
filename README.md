# MA Electricals

This is the official website for MA Electricals, featuring our services, about us, and contact information.

## Development

To start the development server:

```
cd maelectricals
npm install
npm start
```

## GitHub Pages Deployment

### Automatic Deployment

This project is set up with automatic GitHub Pages deployment using GitHub Actions. 
When you push to the `main` branch, the site will automatically be built and deployed to GitHub Pages.

### Manual Deployment

To manually deploy to GitHub Pages:

1. Make sure you have the `gh-pages` package installed:
   ```
   npm install --save-dev gh-pages
   ```

2. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/maelectricals"
   ```

3. Deploy with the following command:
   ```
   npm run deploy
   ```

## Troubleshooting GitHub Pages

If you encounter issues with GitHub Pages deployment:

1. Verify your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Ensure source is set to "Deploy from a branch"
   - Branch should be set to "gh-pages" / "/ (root)"

2. Check the GitHub Actions tab for any build errors

3. Ensure the `homepage` field in `package.json` is correct

4. Try running `npm run deploy` manually

## Project Structure

```
maelectricals/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # CSS stylesheets
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── .github/workflows/   # GitHub Actions workflows
└── package.json         # Dependencies and scripts
```