// import { useState } from "react"
import type { PropsWithChildren } from "react"
import { Streak as StreakType } from "./Types"

// type StreakProps = {
//     id: string;
//     project: string;
//     streakCount: number;
// }

export default function Streak(props: Readonly<PropsWithChildren<StreakType>>) {
    const {children, streakCount, projectId } = props
    // const [streakCount, setStreakCount] = useState(streaks)

    // const updateStreak = () => {
    //     streaks += 1
    //     console.log(streaks)
    // }

    // const updateStreak = () => {
    //     setStreakCount(streakCount + 1)
    //     console.log(streakCount)
    // }

    return (
        <>
       <section>
        {children}
        <p>
            projectId: {projectId}. ProjectStreak : {streakCount}
        </p>
       </section>
        {/* <button onClick={updateStreak}>Update streak</button> */}
        </>
    )
}