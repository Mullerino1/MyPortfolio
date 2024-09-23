// import Streak from "./Streak"
// // import { useState } from "react"

// type StreaksProps = {
//     streaks: {
//         id: string;
//         project: string;
//         streakCount: number;
//     }[];
//     updateStreakCount: (id: string) => void;
//     total: number;
//     }

// export default function Streaks(props: Readonly<StreaksProps>) {
//     const { streaks = [], total = 0,  updateStreakCount} = props
    
    

//     return (

//         <section>
//             <h3>Overview of projects</h3>
//             <ul>
//                 {streaks.map((streak) => (
//                     <li key={streak.id}>
//                         <Streak
//                         id={streak.id}
//                         project={streak.project}
//                         streakCount={streak.streakCount}
//                         >
//                             <button type="button" 
//                             onClick={() => updateStreakCount(streak.id)}
//                             >
//                                 update Streak
//                                 </button>
//                         </Streak>
//                     </li>
//                 ))}
//             </ul>
//             <p>
//                 You have {streaks.length} with a total: {total} streaks
//             </p>
//         </section>

//     )
// }