import AlbumScroll from "../components/AlbumScroll";
import '../style/Discography.css'

export default function Route() {
  return (
    <>
      <section id="discography">
        <AlbumScroll />
      </section>
      <section id="discography-table" className="w-full">
        <h3 className="text-center">Discography</h3>
        <div className="overflow-x-auto">
          <table className="table-md">
            {/* head */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Lanzamiento</th>
                <th>Sello</th>
                <th>Genero</th>
                <th>Numero de canciones</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Inspire</td>
                <td>2013-04-21</td>
                <td>Self-Released</td>
                <td>Screamo</td>
                <td>5</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Muse</td>
                <td>2014-09-02</td>
                <td>Self-Released</td>
                <td>Progressive Metal</td>
                <td>11</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>New Levels New Devils</td>
                <td>2018-10-12</td>
                <td>Equal Vision Records</td>
                <td>Progressive Metal</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Remember That Your Will Die</td>
                <td>2022-10-28</td>
                <td>Rise Records</td>
                <td>Progressive Metal</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Renaissance</td>
                <td>2016-03-11</td>
                <td>Equal Vision Records</td>
                <td>Progressive Metal</td>
                <td>12</td>
              </tr>
              <tr>
                <td>The Most Hated</td>
                <td>2017-07-21</td>
                <td>Equal Vision Records</td>
                <td>Progressive Metal</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}