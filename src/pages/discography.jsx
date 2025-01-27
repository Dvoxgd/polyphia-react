/* eslint-disable react/jsx-no-comment-textnodes */
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
        
        <table className="min-w-full table-auto text-center">
        <thead>
          <tr>
            <th className="md:px-4 md:py-2 text-sm md:text-lg">Nombre</th>
            <th className="md:px-4 md:py-2 text-sm md:text-lg">Lanzamiento</th>
            <th className="md:px-4 md:py-2 text-sm md:text-lg">Sello</th>
            <th className="md:px-4 md:py-2 text-sm md:text-lg">Genero</th>
            <th className="md:px-4 md:py-2 text-sm md:text-lg">Numero de canciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Inspire</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2013-04-21</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Self-Released</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Screamo</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">5</td>
          </tr>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Muse</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2014-09-02</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Self-Released</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Progressive Metal</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">11</td>
          </tr>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">New Levels New Devils</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2018-10-12</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Equal Vision Records</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Progressive Metal</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">10</td>
          </tr>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Remember That Your Will Die</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2022-10-28</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Rise Records</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Progressive Metal</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">8</td>
          </tr>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Renaissance</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2016-03-11</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Equal Vision Records</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Progressive Metal</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">12</td>
          </tr>
          <tr>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">The Most Hated</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">2017-07-21</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Equal Vision Records</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">Progressive Metal</td>
            <td className="md:px-4 md:py-2 text-sm md:text-lg">6</td>
          </tr>
          
          {/* More rows can be added here */}
        </tbody>
      </table>
        
        </div>
      </section>
    </>
  )
}