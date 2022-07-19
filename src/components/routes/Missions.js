import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../../store/missions';
import styles from './Missions.module.css';

const Missions = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main id="missions">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            /* eslint-disable camelcase */
            <tr key={item.mission_id} className={styles.tableRow}>
              <td>{item.mission_name}</td>
              <td>{item.description}</td>
              <td>
                <button type="button">NOT A MEMBER</button>
              </td>
              <td>
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
