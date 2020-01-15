import wait from '../utils/wait.js'



export const createAttempt = async (challengeID) => {
    // Temp, to be replaced with backend API call?
    // Emma this weekend - **Figure out what to do and if I can use Michael's API here**
    await wait(Math.floor(100 + Math.random() * 500))
    return true
}

// lookup attempts for challenge /:idtype/:id/attempts/, see if the current user has an attempt that is in progress 
export const isActiveAttempt = async (challengeID, userID) => {
    const activeAttemptExists = false;
    // Temp, to be replaced with backend API call ? Can do a lookup of all attempts, find if I have one for my candidate ID and sere if it is active.
    await wait(Math.floor(100 + Math.random() * 500))
    return activeAttemptExists
}

