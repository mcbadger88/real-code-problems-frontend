import wait from '../utils/wait.js'

const allAttempts = [
        {
            "status": "FAILED",
            "_id": "764aa5d0-3b1f-11ea-acfb-439a69150d3b",
            "candidate_id": {
                "attempts": [
                    "5df865457947111ec1a81caf",
                    "5df865457947111ec1a81cb1"
                ],
                "_id": "5df865457947111ec1a81cad",
                "user_id": "5df865447947111ec1a81cab",
                "firstname": "Jerry",
                "lastname": "Seinfeild",
                "linkedin": "jerrysignfeild@linkedin.com",
                "github": "qqowuiru",
                "bio": "qqowuiru",
                "image": "https://images-na.ssl-images-amazon.com/images/I/81GL-27MwDL._SY500_.jpg",
                "username": "YouLikeJazz?",
                "__v": 0
            },
            "challenge_id": {
                "active": true,
                "features": [
                    "5df865447947111ec1a81ca3",
                    "5df865447947111ec1a81ca5"
                ],
                "_id": "5df865447947111ec1a81ca7",
                "title": "Blog Challenge",
                "description": "Make a blog post",
                "zipFileLocation": "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
                "__v": 0
            },
            "submission_file": null,
            "results_log": "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/mock_submissions/all_failing.json",
            "uuid": 13,
            "createdAt": "2019-12-17T05:19:01.078Z",
            "updatedAt": "2019-12-17T05:19:01.078Z",
            "__v": 0
        },
        {
            "status": "STARTED",
            "_id": "5df865457947111ec1a81cb1",
            "candidate_id": {
                "attempts": [
                    "5df865457947111ec1a81caf",
                    "5df865457947111ec1a81cb1"
                ],
                "_id": "5df865457947111ec1a81cad",
                "user_id": "5df865447947111ec1a81cab",
                "firstname": "Jerry",
                "lastname": "Seinfeild",
                "linkedin": "jerrysignfeild@linkedin.com",
                "github": "qqowuiru",
                "bio": "qqowuiru",
                "image": "https://images-na.ssl-images-amazon.com/images/I/81GL-27MwDL._SY500_.jpg",
                "username": "YouLikeJazz?",
                "__v": 0
            },
            "challenge_id": {
                "active": true,
                "features": [
                    "5df865447947111ec1a81ca3",
                    "5df865447947111ec1a81ca5"
                ],
                "_id": "5df865447947111ec1a81ca7",
                "title": "Blog Challenge",
                "description": "Make a blog post",
                "zipFileLocation": "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
                "__v": 0
            },
            "submission_file": null,
            "results_log": "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/mock_submissions/all_passing.json",
            "uuid": 69,
            "createdAt": "2019-12-17T05:19:01.131Z",
            "updatedAt": "2019-12-17T05:19:01.131Z",
            "__v": 0
        }
    ]

const allChallengeAttempts = [
    {
    "status": "FAILED",
    "_id": "5df865457947111ec1a81caf",
    "candidate_id": {
    "attempts": [
    "5df865457947111ec1a81caf",
    "5df865457947111ec1a81cb1"
    ],
    "_id": "5df865457947111ec1a81cad",
    "user_id": "5df865447947111ec1a81cab",
    "firstname": "Jerry",
    "lastname": "Seinfeild",
    "linkedin": "jerrysignfeild@linkedin.com",
    "github": "qqowuiru",
    "bio": "qqowuiru",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81GL-27MwDL._SY500_.jpg",
    "username": "YouLikeJazz?",
    "__v": 0
    },
    "challenge_id": {
    "active": true,
    "features": [
    "5df865447947111ec1a81ca3",
    "5df865447947111ec1a81ca5"
    ],
    "_id": "5df865447947111ec1a81ca7",
    "title": "Blog Challenge",
    "description": "Make a blog post",
    "zipFileLocation": "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
    "__v": 0
    },
    "submission_file": null,
    "results_log": "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/mock_submissions/all_failing.json",
    "uuid": 13,
    "createdAt": "2019-12-17T05:19:01.078Z",
    "updatedAt": "2019-12-17T05:19:01.078Z",
    "__v": 0
    },
    {
    "status": "PASSED",
    "_id": "5df865457947111ec1a81cb0",
    "candidate_id": {
    "attempts": [
    "5df865457947111ec1a81cb0"
    ],
    "_id": "5df865457947111ec1a81cae",
    "user_id": "5df865447947111ec1a81cac",
    "firstname": "Keanu",
    "lastname": "Reeves",
    "linkedin": "actualjohnwick@linkedin.com",
    "github": "totallyimmortal@github.com",
    "bio": "[unequivical lad]",
    "image": "https://dlisted.com/wp-content/uploads/2019/06/Keannnu.jpg",
    "username": "YOU'REbreathtaking",
    "__v": 0
    },
    "challenge_id": {
    "active": true,
    "features": [
    "5df865447947111ec1a81ca3",
    "5df865447947111ec1a81ca5"
    ],
    "_id": "5df865447947111ec1a81ca7",
    "title": "Blog Challenge",
    "description": "Make a blog post",
    "zipFileLocation": "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
    "__v": 0
    },
    "submission_file": null,
    "results_log": "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/mock_submissions/all_passing.json",
    "uuid": 42,
    "createdAt": "2019-12-17T05:19:01.104Z",
    "updatedAt": "2019-12-17T05:19:01.104Z",
    "__v": 0
    },
    {
    "status": "STARTED",
    "_id": "5df865457947111ec1a81cb1",
    "candidate_id": {
    "attempts": [
    "5df865457947111ec1a81caf",
    "5df865457947111ec1a81cb1"
    ],
    "_id": "5df865457947111ec1a81cad",
    "user_id": "5df865447947111ec1a81cab",
    "firstname": "Jerry",
    "lastname": "Seinfeild",
    "linkedin": "jerrysignfeild@linkedin.com",
    "github": "qqowuiru",
    "bio": "qqowuiru",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81GL-27MwDL._SY500_.jpg",
    "username": "YouLikeJazz?",
    "__v": 0
    },
    "challenge_id": {
    "active": true,
    "features": [
    "5df865447947111ec1a81ca3",
    "5df865447947111ec1a81ca5"
    ],
    "_id": "5df865447947111ec1a81ca7",
    "title": "Blog Challenge",
    "description": "Make a blog post",
    "zipFileLocation": "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
    "__v": 0
    },
    "submission_file": null,
    "results_log": "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/mock_submissions/all_passing.json",
    "uuid": 69,
    "createdAt": "2019-12-17T05:19:01.131Z",
    "updatedAt": "2019-12-17T05:19:01.131Z",
    "__v": 0
    }
    ]

// Will use candidates/:candidateid/attempts backend route
export const getMyAttempts = async (candidateID) => {
    // Temp, to be replaced with backend API call to candidates/:candidateid/attempts

    await wait(Math.floor(500 + Math.random() * 1500))
    return allAttempts
}

export const apiCreateAttempt = async (challengeID) => {
    // Temp, to be replaced with backend API call?
    // Emma this weekend - **Figure out what to do and if I can use Michael's API here**
    console.log("fake attempt created !")
    allAttempts[0].status = "STARTED"
    await wait(Math.floor(100 + Math.random() * 500))
    return true
}

//delete?
export const apiSubmitAttempt = async (challengeID, submissionFile) => {
    // Temp, to be replaced with backend API call?
    // Emma this weekend - **Figure out what to do and if I can use Michael's API here**
    console.log("fake attempt submitted !")
    
    allAttempts[0].status = "SUBMITTED"
    await wait(Math.floor(100 + Math.random() * 500))
    return true
}

// lookup attempts for challenge /:idtype/:id/attempts/, see if the current user has an attempt that is in progress 
export const apiGetAttempt = async (challengeID, userID) => {
    // Temp, to be replaced with backend API call ? Can do a lookup of all attempts, find if I have one for my candidate ID and sere if it is active.
    await wait(Math.floor(100 + Math.random() * 500))
    return allAttempts[0]
}

export const getAllAttemptsForChallenge = async (challengeID) => {
    //Replace with api call to /challenges/:id/attempts
    await wait(Math.floor(100 + Math.random() * 500))
    return allChallengeAttempts;
}