
  # Build Portfolio Website

  This is a code bundle for Build Portfolio Website. The original project is available at https://www.figma.com/design/VhMbYOF4iVPIcHFyNUAbtY/Build-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploy to Netlify

  1. Commit and push your repository to GitHub (or another Git provider).
  2. Go to https://app.netlify.com and create a new site -> "Import from Git".
  3. Connect your repo and set the build options:
    - Build command: `npm run build`
    - Publish directory: `dist`
  4. (Optional) If your app uses client-side routing, Netlify will use `public/_redirects` (already added) to route to `index.html`.

  Alternatively you can use Netlify CLI:

  ```powershell
  npx netlify-cli deploy --prod --dir=dist --message="Deploy from local"
  ```

  If you want, I can connect or configure Netlify settings for you (create `netlify.toml` was added).
  