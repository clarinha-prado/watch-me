import { Button } from './Button';

import { api } from '../services/api';
import { useEffect, useState, useContext } from 'react';

import '../styles/global.scss';
import '../styles/sidebar.scss';
import { MoviesContext } from '../contexts/MoviesContext';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  const { changeGenre, selectedGenreId } = useContext(MoviesContext);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    changeGenre(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.title}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}