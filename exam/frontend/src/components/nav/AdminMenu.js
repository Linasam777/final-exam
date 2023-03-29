import { NavLink } from 'react-router-dom'

export default function AdminMenu() {
  return (
    <>
      <div className="p-3 mt-2 mb-2 h4 bg-light">Pasirinkite:</div>

      <ul className="list-group list-unstyled">
        <li>
          <NavLink className="list-group-item" to="/dashboard/admin/category">
            Pridėti renginį
          </NavLink>
        </li>

        <li>
          <NavLink
            className="list-group-item"
            to="/dashboard/admin/participants"
          >
            Dalyvių registracija
          </NavLink>
        </li>
      </ul>
    </>
  )
}
