import wait from '../utils/wait.js'

const allTestLines = [
    {
        testString: `And follows "New Article"                `,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/01_and_follows_new_article.jpg",
        lineNumber: 8
    },
    {
        testString: `Then she sees a "New Article" form`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/02_then_she_sees_a_new_article_form.jpg",
        lineNumber: 10
    },
    {
        testString: `When she fills in the feilds`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/03_when_she_fills_in_the_fields.jpg",
        lineNumber: 12
    },
    {
        testString: `Then "she" sees success message "Article was successfully created."`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/04_then_she_sees_success_message_article_was_successfully_created.jpg",
        lineNumber: 12
    },
    {
        testString: `And "she" sees the article with the content`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/05_and_she_sees_the_article_with_the_content.jpg",
        lineNumber: 18
    },
    {
        testString: `When "John" comments "Well done"`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/06_when_john_comments_well_done.jpg",
        lineNumber: 13
    },
    {
        testString: `Then "he" sees success message "Comment was successfully created."`,
        helperImage: "https://raw.githubusercontent.com/saramic/real-code-challenge-blog/master/helper_images/07_then_he_sees_success_message_comment_was_successfully_created.jpg",
        lineNumber: 15
    }
];

const allFeatures = [
    {
        title: "Can create blog posts",
        number: 1,
        scenarios: [
            {
                scenarioTitle: "Jane goes to the site and creates a blog post",
                lineNumbers: [allTestLines[0]._id, allTestLines[1]._id, allTestLines[2]._id, allTestLines[3]._id, allTestLines[4]._id]
            }
        ]
    },
    {
        title: "Can comment on blog posts",
        number: 2,
        scenarios: [
            {
                scenarioTitle: "John and James comment on Jane's blog post",
                lineNumbers: [allTestLines[5]._id, allTestLines[6]._id]
            }
        ]
    }
];

// Challenges - the feature data is only passed by reference
const challenges = [
    {   id:1,
        title: "Blog Challenge",
        description: "Make a blog post",
        zipFileLocation: "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
        active: true,
        features: [allFeatures[0]._id, allFeatures[1]._id]
    },

    {   id:2,
        title: "Two Side Market Place",
        description: "Make a a two-side market place",
        zipFileLocation: "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
        active: true,
        features: [allFeatures[0]._id, allFeatures[1]._id]
    }
];


export const getAllChallenges = async () => {
    // Temp, to be replaced with backend API call to /challenges
    await wait(Math.floor(500 + Math.random() * 1500))
    // console.log(challenges)
    return challenges
}

// Will use /challenges/:id backend route
export const getSingleChallenge = async (challengeID) => {
    // Temp, to be replaced with backend API call to /challenges/:id
    await wait(Math.floor(500 + Math.random() * 1500))
    console.log(challenges)
    return challenges[challengeID - 1]
}


// Example Code to use getAllChallenges API in component

// const ViewSingleChallenge = (challengeID) => {
//     const [challenges, setChallenges] = useState(null)

//     useEffect(() => {
//         console.log(challenges)
//         console.log(challengeID.challengeID)
//       }, [ challenges ])

//     useEffect( async () => {
//         // Replace with API call
//         // getAllChallenges().then(response => {
//         //   setChallenges(response)
//         // })
//         const challs = await getAllChallenges()
//         setChallenges(challs)
//       }, [])

//     return (
//         <>
//         <NavBar />
//         <h1>VIEW ALL CHALLENGE HERE !</h1>
//         <p>{challenges ? challenges[challengeID.challengeID - 1].title : null }</p>
//         {/* { challenges ? <img src={challenges[challengeID.challengeID - 1].features[0].scenarios[0].lineNumbers[0].helperImage}></img> : null } */}
//         </>
//     )
// }