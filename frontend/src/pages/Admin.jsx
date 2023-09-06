import AddArticle from "../components/AddArticle"
import DeleteArticle from "../components/DeleteArticle"
import EditArticle from "../components/EditArticle"

export default function Admin() {
  return (
    <div className="Admin">
      <h2 className="sectionTitle">Gestion du blog</h2>
      <div className="adminContainer">
        <AddArticle />
        <EditArticle />
        <DeleteArticle />
      </div>
    </div>
  )
}
