const Documentation = () => {
  return (
    <div className="pt-5 px-10">
      <h1 className="text-2xl font-bold text-center">Project Documentation</h1>
      <h2>
        <span className="text-2xl font-semibold mt-8 underline">
          Project Name:
        </span>{" "}
        <span className="font-semibold">Gallery</span>
      </h2>
      <h2>
        <span className="text-xl mt-5 font-semibold">Version:</span>{" "}
        <span className="font-semibold">1.0</span>
      </h2>
      <h2 className="text-2xl font-semibold mt-8">Table of Context:</h2>
      <span className="mt-2 list-disc ml-10">
        <li>Introduction</li>
        <li>Features</li>
        <li>Technologies Used </li>
        <li>Getting Started </li>
        <li>Folder Structure</li>
        <li>How to Use</li>
      </span>
      <h2 className="text-2xl font-semibold mt-8 underline">
        Project Overview:
      </h2>
      <p className="mt-2">
        <span className="text-2xl font-semibold ">1. Introduction:</span>{" "}
        "Gallery" is a web application built using React, featuring a
        gallery-style website that allows users to view, and interact with
        images. The project utilizes various libraries and tools to provide a
        rich user experience.
      </p>
      <p className="mt-2">
        <span className="text-2xl font-semibold ">2. Features:</span>
        <span className="mt-2 list-disc ml-10">
          <li> Manage images in a gallery.</li>
          <li>Drag and drop functionality for image reordering.</li>
          <li>Smooth animations powered by Framer Motion. </li>
          <li>Navigation between different pages using React Router.</li>
          <li>State management with Redux for managing application data.</li>
          <li>Styling using Tailwind CSS and DaisyUI components.</li>
        </span>
      </p>
      <p className="mt-2">
        <span className="text-2xl font-semibold ">3. Technologies Used:</span>
        <span className="mt-2 list-disc ml-10">
          <li>React: A JavaScript library for building user interfaces.</li>
          <li>
            Redux: A state management library for managing application data.
          </li>
          <li>
            React DnD Kit: A library for implementing drag and drop
            functionality.
          </li>
          <li>
            Framer Motion: An animation library for creating smooth transitions
            and animations.
          </li>
          <li>
            Tailwind CSS: A utility-first CSS framework for styling components.
          </li>
          <li>DaisyUI: A component library for enhancing Tailwind CSS.</li>
          <li>
            React Router: A routing library for managing navigation in a React
            application.
          </li>
        </span>
      </p>

      <span className="mt-2">
        <span className="text-2xl font-semibold ">4. Getting Started:</span>
        <span>
          To get started with the "Gallery" project, follow these steps:
        </span>
        <ol className="mt-2 list-decimal ml-10">
          <li>
            Clone the repository from GitHub:{" "}
            <code>
              git clone https://github.com/mahdimortuza/image-gallery.git
            </code>
          </li>
          <li>Change into the project directory: cd image-gallery.</li>
          <li>Install project dependencies: npm install or yarn install.</li>
          <li>Run the development server: npm run dev or yarn start.</li>
          <li>
            Open your browser and navigate to http://localhost:3000 to access
            the application.
          </li>
        </ol>
      </span>

      <p className="mt-2">
        <span className="text-2xl font-semibold ">5. Project Structure:</span>
        <span>
          The project is organized with a typical React project structure.
          Here's a high-level overview:
        </span>
        <span className="mt-2 list-disc ml-10">
          <li>src/: Main source code directory.</li>
          <li>layout/: For main layout of application.</li>
          <li>components/: Reusable React components.</li>
          <li>redux/: Redux state management setup.</li>
          <li>pages/: Inspanidual pages for the application.</li>
          <li>routes/: For defining routes of the application</li>
        </span>
      </p>

      <p className="mt-2">
        <span className="text-2xl font-semibold ">6. How to Use</span>
        <span>
          The Gallery application is user-friendly, and you can explore its
          features easily. Here's a brief overview of how to use the
          application:
        </span>
        <span className="mt-2 list-disc ml-10">
          <li>Reorder images using the drag and drop feature.</li>
          <li>Navigate between different pages using the navigation menu.</li>
          <li>Enjoy smooth animations while interacting with the app.</li>
        </span>
      </p>

      <h2 className="mt-8">
        <span className="text-2xl font-semibold  underline">Conclusion:</span>{" "}
        <span className="">
          In summary, the "Gallery" project is a feature-rich web application
          built with React, Redux, React DnD Kit, Framer Motion, Tailwind CSS,
          DaisyUI, and React Router. It enables users to manage image galleries
          with ease, featuring image uploads, drag-and-drop functionality,
          animations, and page navigation.
        </span>
      </h2>
    </div>
  );
};

export default Documentation;
