import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../Interfaces/IUser';
import { retrieveUserScores } from '../../Slices/UserSlice';
import { AppDispatch, RootState } from '../../Store';
import ScoreRows from './ScoreRows';
import '../HighScore/Scoreboard.css';
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const HighScore: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigator = useNavigate();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(retrieveUserScores());
    console.log(userState.users);
    console.log('X');
  }, []);

  const handleReturn = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator("/playgame");
  }

  return (
    <div className='page-container'>
      <Navbar/>
      <div className='score-container'>
        <table className='score-table'>
          <thead>
            <tr className='headers'>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Score</th>
            </tr>
          </thead>

          {userState.users?.map((user: IUser) => {
            return <ScoreRows {...user} key={user.userId} />;
          })}
        </table>
        <button className='button'onClick={handleReturn}>Return</button>
      </div>
    </div>
  );
};

export default HighScore;
