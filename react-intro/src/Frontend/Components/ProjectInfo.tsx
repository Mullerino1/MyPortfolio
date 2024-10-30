
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
      visibility: project?.visibility ?? "",

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
            {isFieldInvalid("description") && (
            <p className="field-error error">Needs minimum 5 letters</p>
          )}
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
