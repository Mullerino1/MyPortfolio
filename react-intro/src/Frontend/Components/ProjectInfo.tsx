import type { Project } from "./Types";
// import useHabitForm from "../hooks/useHabitForm";
import { useEffect } from "react";
import useProjectReducerForm from "../hooks/useProjectReduceFrom"


// TODO: Potential issue - hvis flere actions
// type HabitFormProps = {
//   addHabit: (title: string) => void;
//   updateHabit: (id: string, data: Partial<Habit>) => void;
// };

// type ProjectIdeaProps = {
//     projectData: Pick<Project, "id" | "title" | "description" | "deleted" | "public" | "publishedAt" | "status" | "tags" >[]
//     handleRemoveProject: (title: string) => void
// }
type ProjectIdeaProps = {
  onSubmit: (id: string | undefined, data: Partial<Project>) => void;
//   handleRemoveProject: (title: string) => void
  project?: Project;
};

export default function ProjectForm(props: Readonly<ProjectIdeaProps>) {
  const { onSubmit, project } = props;

  const isEditing = !!project;

  const { handleSubmit, getFieldProps, isFieldInvalid } = useProjectReducerForm({
    initialFields: { title: project?.title ?? "" },
    onSubmit: (data) => onSubmit(project?.id, data),
    validate: {
      title: (_, value) => value.length > 2,
    },
  });

  const labels = {
    edit: {
      title: "Endre tittel på vane",
      submit: "Endre vane",
    },
    add: {
      title: "Legg til en ny vane",
      submit: "Legg til vane",
    },
  };

  return (
    <section className="project-ideas" data-testid="project-idea">
      <h3>{isEditing ? labels.edit.title : labels.add.title}</h3>
      {/* <pre>
        {JSON.stringify(
          { title, titleValid, titleIsDirty, titleIsTouched },
          null,
          2
        )}
      </pre> */}
      {/* <div className="wrapper"> */}

      
        <form onSubmit={handleSubmit}>
        <div className="title field">
            <label htmlFor="title">
              Project Name:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={!isFieldInvalid ? "success" : ""}
              required
              placeholder="Legg til tittel"
              {...getFieldProps("title")}
            />
            {isFieldInvalid("title") ? (
              <p className="field-error error">
                Needs three letters
              </p>
            ) : null}
          </div>
        {/* <section>
         <label htmlFor="title">Project Name:</label>
             <input 
            id="title"
            type="text"
            name="title"
            placeholder="Your title here"
           
            />
        </section> */}
        <section>
        <label htmlFor="description">Describe your project:</label>
            <input 
            id="description"
            type="text"
            name="description"
            placeholder="Describe your project"
         
            />
        </section>
        <section>
        <label htmlFor="id">Id LOL:</label>
            <input 
            id="id"
            type="text"
            name="id"
           
            />
        </section>
         

          <div>
            <button type="submit" id="submit" className="success">
              {isEditing ? labels.edit.submit : labels.add.submit}
            </button>
          </div>
        </form>
      {/* </div> */}
    </section>
  );
}



// export default function ProjectIdea(props: Readonly<ProjectIdeaProps>) {
//     const { projectData, handleRemoveProject} = props
//     if(!projectData) return null


// return (
//     <section className="project-ideas" data-testid="project-idea">
//         <h2>Your Projects</h2>
//         {projectData.length > 0 ? (
//             <article>
//                 {projectData.map((projectItem) => (
//                     <section key={projectItem.id}>
                        
//                             <h2>{projectItem.title}</h2>
//                             <p>{projectItem.description}</p>
//                             {projectItem.deleted ? (
//                             <p>[DELETED</p>
//                         ) : (
//                             <button type="button" onClick={() => handleRemoveProject(projectItem.id)}
//                             >
//                                 Remove
//                             </button>
//                         )}
//                     </section>
//                 ))}
//             </article>
//         ) : (
//             <p>No data</p>
//         )}
//     </section>
// )

// }