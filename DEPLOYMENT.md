# Quick Deployment Guide for GitHub Pages

## I'll Help You Deploy! 🚀

Since you asked if I can help connect to GitHub, here's what we can do together:

### Step-by-Step Deployment

#### 1. Create a GitHub Account
- Go to https://github.com/join
- Sign up with your email
- Verify your account

#### 2. Choose Your Deployment Method

**EASIEST METHOD - GitHub Desktop:**

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop and sign in
3. Click "File" → "Add Local Repository"
4. Select this folder: `/Users/leathomas/Desktop/Miyaxx website`
5. If prompted to create a repository, click "Create Repository"
6. Click "Publish repository" button
7. Choose a name: `miyaxx` 
8. Click "Publish Repository"

**TERMINAL METHOD (if you prefer):**

```bash
# Navigate to your project
cd "/Users/leathomas/Desktop/Miyaxx website"

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Miyaxx website"

# Go to github.com and create a new repository named 'miyaxx'
# Then run these commands (replace YOUR-USERNAME with your GitHub username):

git remote add origin https://github.com/YOUR-USERNAME/miyaxx.git
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click the "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"

#### 4. Wait 1-2 Minutes

GitHub will build and deploy your site. You'll see a message like:
"Your site is ready to be published at https://YOUR-USERNAME.github.io/miyaxx/"

#### 5. Visit Your Live Site! 🎉

Your website will be live at:
`https://YOUR-USERNAME.github.io/miyaxx/`

---

## Updating Your Site

After making changes to any files:

**With GitHub Desktop:**
1. Open GitHub Desktop
2. You'll see your changes listed
3. Write a commit message (e.g., "Updated tour dates")
4. Click "Commit to main"
5. Click "Push origin"
6. Wait 1-2 minutes for GitHub Pages to update

**With Terminal:**
```bash
cd "/Users/leathomas/Desktop/Miyaxx website"
git add .
git commit -m "Your update description"
git push
```

---

## Custom Domain (Optional)

If you want to use a custom domain like `www.miyaxx.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your GitHub repository settings → Pages:
   - Enter your custom domain
   - Click "Save"
3. In your domain registrar's DNS settings:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
4. Wait 24-48 hours for DNS propagation

---

## Need Help?

If you run into any issues, let me know! I can help troubleshoot.

Common issues:
- **404 error**: Make sure `index.html` is in the root directory
- **Video not playing**: Check that the video file is committed to GitHub
- **Site not updating**: Try doing a "hard refresh" (Ctrl+Shift+R or Cmd+Shift+R)

