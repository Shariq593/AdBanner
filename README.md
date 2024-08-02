
## **GrowEasy Assignment of Ad Banner Management:**
**Overview :**
This project is a simple ad banner management application built with Next.js and TypeScript. It features a homepage that displays a list of ad banners and allows users to edit them through a modal interface. The application is designed to be easy to use and maintain, showcasing reusable components for displaying and editing banners.
## Deployed Link - https://master--adbanners.netlify.app/
**Features:**
1. **Display Ad Banners**: The homepage fetches and displays a list of ad banners from a local JSON file.
2. **Edit Ad Banners**: Clicking on a banner opens a modal with an editing form where users can update banner details.
3. **Update and Save Changes**: Users can save their changes, which updates the banner data on the homepage.
## Project Structure
1. pa**ges/index.tsx**: The main file that sets up the homepage. It fetches banner data, displays the banners, and handles modal operations.
2. **components/BannerImageComp.tsx**: A reusable component for displaying ad banners with an "Edit" button.
3. **components/EditBannerTemplateBs.tsx**: A modal component that allows users to edit the selected banner's details.
##
**Usage**
1. **Viewing Banners**: On the homepage, ad banners are displayed in a grid layout.
2. **Editing Banners:** Click the "Edit" button on any banner to open the modal. Update the banner details in the form and click "Save" to apply changes. The modal will close, and the banner will be updated on the homepage.
## JSON Data Structure
The JSON file adBanners.json used for fetching banner data has the following structure:
```
[
  {
    "id": 1,
    "title": "Sample Banner 1",
    "description": "Description for banner 1",
    "cta": "Learn More",
    "image": "path/to/image1.jpg",
    "background": "path/to/background1.jpg"
  },
  ...
]
```

## Code Details
1. State Management: The useState and useEffect hooks manage the banner data and modal state.
2. Modal Replacement: When a new banner is selected for editing, the current modal is replaced by the new one.
## Future Improvements
1. **Validation**: Add form validation to ensure banner details are entered correctly.
2. **Backend Integration**: Replace the local JSON file with a backend API to fetch and update banner data dynamically.
3. **Styling**: Enhance the modal and banner styles for a better user experience.
