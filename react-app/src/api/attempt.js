import wait from '../utils/wait.js'

const allAttempts = [
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
