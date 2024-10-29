// import type { Project } from "./Types";
// // import useHabitForm from "../hooks/useHabitForm";
// import { useEffect } from "react";
// import useProjectReducerForm from "../hooks/useProjectReduceFrom"


// // TODO: Potential issue - hvis flere actions
// // type HabitFormProps = {
// //   addHabit: (title: string) => void;
// //   updateHabit: (id: string, data: Partial<Habit>) => void;
// // };

// // type ProjectIdeaProps = {
// //     projectData: Pick<Project, "id" | "title" | "description" | "deleted" | "public" | "publishedAt" | "status" | "tags" >[]
// //     handleRemoveProject: (title: string) => void
// // }
// type ProjectIdeaProps = {
//   onSubmit: (id: string | undefined, data: Partial<Project>) => void;
// //   handleRemoveProject: (title: string) => void
//   project?: Project;
// };

// export default function ProjectForm(props: Readonly<ProjectIdeaProps>) {
//   const { onSubmit, project } = props;

//   const isEditing = !!project;

//   const { handleSubmit, getFieldProps, isFieldInvalid } = useProjectReducerForm({
//     initialFields: { title: project?.title ?? "" },
//     onSubmit: (data) => onSubmit(project?.id, data),
//     validate: {
//       title: (_, value) => value.length > 2,
//     },
//   });

//   const labels = {
//     edit: {
//       title: "Endre tittel på vane",
//       submit: "Endre vane",
//     },
//     add: {
//       title: "Legg til en ny vane",
//       submit: "Legg til vane",
//     },
//   };

//   return (
//     <section className="project-ideas" data-testid="project-idea">
//       <h3>{isEditing ? labels.edit.title : labels.add.title}</h3>
//       {/* <pre>
//         {JSON.stringify(
//           { title, titleValid, titleIsDirty, titleIsTouched },
//           null,
//           2
//         )}
//       </pre> */}
//       {/* <div className="wrapper"> */}

      
//         <form onSubmit={handleSubmit}>
//         <div className="title field">
//             <label htmlFor="title">
//               Project Name:
//             </label>
//             <input
//               type="text"
//               name="title"
//               id="title"
//               className={!isFieldInvalid ? "success" : ""}
//               required
//               placeholder="Legg til tittel"
//               {...getFieldProps("title")}
//             />
//             {isFieldInvalid("title") ? (
//               <p className="field-error error">
//                 Needs three letters
//               </p>
//             ) : null}
//           </div>
//         <section>
//         <label htmlFor="description">Describe your project:</label>
//             <input 
//             id="description"
//             type="text"
//             name="description"
//             placeholder="Describe your project"
         
//             />
//         </section>
//         <section>
//         <label htmlFor="id">Id LOL:</label>
//             <input 
//             id="id"
//             type="text"
//             name="id"
           
//             />
//         </section>
         

//           <div>
//             <button type="submit" id="submit" className="success">
//               {isEditing ? labels.edit.submit : labels.add.submit}
//             </button>
//           </div>
//         </form>
//       {/* </div> */}
//     </section>
//   );
// }



// // export default function ProjectIdea(props: Readonly<ProjectIdeaProps>) {
// //     const { projectData, handleRemoveProject} = props
// //     if(!projectData) return null


// // return (
// //     <section className="project-ideas" data-testid="project-idea">
// //         <h2>Your Projects</h2>
// //         {projectData.length > 0 ? (
// //             <article>
// //                 {projectData.map((projectItem) => (
// //                     <section key={projectItem.id}>
                        
// //                             <h2>{projectItem.title}</h2>
// //                             <p>{projectItem.description}</p>
// //                             {projectItem.deleted ? (
// //                             <p>[DELETED</p>
// //                         ) : (
// //                             <button type="button" onClick={() => handleRemoveProject(projectItem.id)}
// //                             >
// //                                 Remove
// //                             </button>
// //                         )}
// //                     </section>
// //                 ))}
// //             </article>
// //         ) : (
// //             <p>No data</p>
// //         )}
// //     </section>
// // )

// // }

import type { Project } from "./Types";
import useProjectReducerForm from "../hooks/useProjectReduceFrom";

type ProjectIdeaProps = {
  onSubmit: (id: string | undefined, data: Partial<Project>) => void
  project?: Project
}

export default function ProjectForm(props: Readonly<ProjectIdeaProps>) {
  const { onSubmit, project } = props
  const isEditing = !!project

  const { handleSubmit, getFieldProps, isFieldInvalid } = useProjectReducerForm({
    initialFields: { 
      title: project?.title ?? "",
      description: project?.description ?? "",
      id: project?.id ?? "",
      createdAt: project?.createdAt ?? "", 
      publishedAt: project?.publishedAt ?? "",
      status: project?.status ?? "",
      visibility: project?.status ?? "",

      // updatedAt: project?.updatedAt ?? "",
    },
    onSubmit: (data) => onSubmit(project?.id, data),
    validate: {
      title: (_, value) => value.length > 2,
      description: (_, value) => value.length > 5, 
      id: (_, value) => value.trim() !== "", 
      createdAt: (_, value) => !!Date.parse(value) ,
      publishedAt: (_, value) => !!Date.parse(value) ,
      status: (_, value) => value.length > 2,
      visibility: (_, value) => value === "public" || value === "private", // Simple validation


      // updatedAt: (_, value) => !!Date.parse(value) 
    },
  })

  const labels = {
    edit: {
      title: "Edit Project Title",
      submit: "Update Project",
    },
    add: {
      title: "Add a New Project",
      submit: "Add Project",
    },
  }

  return (
    <section className="project-ideas" data-testid="project-idea">
      <h3>{isEditing ? labels.edit.title : labels.add.title}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="title field">
          <label htmlFor="title">Project Name:</label>
          <input
            type="text"
            name="title"
            id="title"
            className={!isFieldInvalid("title") ? "success" : ""}
            required
            placeholder="Add title"
            {...getFieldProps("title")}
          />
          {isFieldInvalid("title") && (
            <p className="field-error error">Needs three letters</p>
          )}
        </div>

        <section>
          <label htmlFor="description">Describe your project:</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Describe your project"
            {...getFieldProps("description")}
          />
        </section>

        <section>
          <label htmlFor="id">Project ID:</label>
          <input
            id="id"
            type="text"
            name="id"
            placeholder="Enter project ID"
            {...getFieldProps("id")}
          />
        </section>

        <section>
          <label htmlFor="createdAt">Created:</label>
          <input
            id="createdAt"
            type="date"
            name="createdAt"
            {...getFieldProps("createdAt")}
          />
        </section>
        <section>
          <label htmlFor="publishedAt">Published:</label>
          <input
            id="publishedAt"
            type="date"
            name="publishedAt"
            {...getFieldProps("publishedAt")}
          />
        </section>
        <section>
          <label htmlFor="status">Status of project:</label>
          <select 
            id="status"
            name="status"
            {...getFieldProps("status")}
          >
            <option value="new">New</option>
            <option value="paused">Paused</option>
            <option value="finished">Finished</option>
          </select>
        </section>

        <section>
        <label>Visibility:</label>
        <label>
          <input
            type="radio"
            name="visibility"
            value="public"
            checked={getFieldProps("visibility").value === "public"}
            onChange={(e) => getFieldProps("visibility").onChange(e)} // Trigger field update
          />
          Public
        </label>
        <label>
          <input
            type="radio"
            name="visibility"
            value="private"
            checked={getFieldProps("visibility").value === "private"}
            onChange={(e) => getFieldProps("visibility").onChange(e)} // Trigger field update
          />
          Private
        </label>
      </section>


        {/* <section>
          <label>Visibility:</label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={getFieldProps("visibility").value === "public"}
              {...getFieldProps("visibility")}
            />
            Public
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={getFieldProps("visibility").value === "private"}
              {...getFieldProps("visibility")}
            />
            Private
          </label>
        </section>
        */}
        

        <div>
          <button type="submit" id="submit" className="success">
            {isEditing ? labels.edit.submit : labels.add.submit}
          </button>
        </div>
      </form>
    </section>
  )
}
