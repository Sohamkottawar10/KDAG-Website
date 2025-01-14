import intro from "../../../assets/pics/blogs/week 4-1 Data preprocessing.JPG"
import img9 from "../../../assets/pics/blogs/baggingandrandomforests.png"
import img8 from "../../../assets/pics/blogs/week 1 Linear regression.jpg"
import img7 from "../../../assets/pics/blogs/week 2 Logistic regression.JPG"
import img6 from "../../../assets/pics/blogs/week 3-1 KNN.JPG"
import img5 from "../../../assets/pics/blogs/week 4-2 Data preprocessing.JPG"
import img4 from "../../../assets/pics/blogs/week 5 Support vector machines.JPG"
import img3 from "../../../assets/pics/blogs/week 6-2 Decision trees.JPG"
import img2 from "../../../assets/pics/blogs/week 7 Naive bias.JPG"
import img1 from "../../../assets/pics/blogs/Week8_hackathon.jpeg"

const blogs = [
    {
        index:"9",
        img: intro,
        topic:"AI Weekly Series",
        title:"Introduction to the Gigantic ML World!",
        authors:{},
        description:"Does Machine Learning feel like a fantastical term filled with technical mumbo jumbo that should be left to the experts? Worry no more. Starting with this blog that introduces the classification of ML algorithms, the AI Weekly Series brings you insights on important ML topics and techniques on a weekly basis. Take a look at the blog for more insights",
        tag:["Data Science", "Machine Learning", "Artificial Intelligence", "Supervised Learning", "Reinforcement Learning"],
        link:"https://kdagiit.medium.com/intro-to-the-machine-learning-world-a9b9d4f981cc",
        date:"29 Jun,2021"
    },
    {
        index:"8",
        img: img8,
        topic:"AI Weekly Series",
        title:"Linear Regression",
        authors:{},
        description:"Do you remember drawing a straight line V-I characteristic in your cherished Electrical Lab? Do you remember how you drew it when the points didn’t really line up ?The Idea of the “best fit line” stems from the mathematical principle of least squares which turns out to be a rather simple but highly useful algorithm. Take a look at the blog for more insights",
        tag:["Linear Regression", "Data Science", "Coding", "Gradient Descent", "Kaggle Competition"],
        link:"https://kdagiit.medium.com/linear-regression-ba3fe4ba38c0",
        date:"5 July, 2021"
    },
    {
        index:"7",
        img: img7,
        topic:"AI Weekly Series",
        title:"Logistic Regression",
        authors:{},
        description:"Ever wondered how mail apps automatically filter out the spam mails? Allow us to introduce you to a wonderful classification algorithm which intuitively introduces a bunch of important ML ideas like Gradient Descent and Nonlinear Cost Functions. Also, as a reward for making it till the end, we’ll show you how to code it up from scratch. Take a look at the blog for more insights",
        tag:["Logistic Regression", "Machine Learning", "Artificial Intelligence"],
        link:"https://kdagiit.medium.com/logistic-regression-60194ba582e8",
        date:"12 July,2021"
    },
    {
        index:"6",
        img: img6,
        topic:"AI Weekly Series",
        title:"K-Nearest Neighbour (KNN) Algorithm",
        authors:{},
        description:"We’ve all heard the quote “Tell me who your friends are and I will tell you who you are” as people surround themselves with those of similar interests.The same goes for data points. Let’s explore the famous K- Nearest Neighbours algorithm and see how much the neighbours of a data point tell us about it’s classification. Take a look at the blog for more insights",
        tag:["Machine Learning", "Artificial Intelligence", "Algorithms", "KNN Algorithms", "Data Science"],
        link:"https://kdagiit.medium.com/k-nearest-neighbor-knn-algorithm-9a0eefe1f148",
        date:"19 July, 2021"
    },
    {
        index:"5",
        img: img5,
        topic:"AI Weekly Series",
        title:"Data Preprocessing — A key to success!",
        authors:{},
        description:"After having gone through various ML algorithms, in this blog, we shall cover the topic which is considered as the Heart of the Data Science project i.e \"Data Preprocessing\". We shall master it in a very structured manner, which in turn will help us make our dataset more reliable, and interpretable. So, are you ready to boost your data science acumen? Take a look at the blog for more insights",
        tag:["Logistic Regression", "Machine Learning", "Artificial Intelligence"],
        link:"https://kdagiit.medium.com/data-preprocessing-a-key-to-success-a3907a06ef24",
        date:"27  july, 2021"
    },
    
    {
        index:"4",
        img: img4,
        topic:"AI Weekly Series",
        title:"Support Vector Machines — It’s not-so-complicated!",
        authors:{},
        description:"A Support Vector Machine (SVM) is a discriminative classifier formally defined by a separating hyperplane. In addition to performing linear classification, SVMs can efficiently perform a non-linear classification, implicitly mapping their inputs into high-dimensional feature spaces. Take a look at the blog for more insights",
        tag:["SVM, machine learning", "algorithm", "data science", "AI"],
        link:"https://kdagiit.medium.com/support-vector-machines-its-not-so-complicated-5ccf66278159",
        date:"18 Aug, 2021"
    },
    {
        index:"3",
        img: img3,
        topic:"AI Weekly Series",
        title:"Decision Trees — Just the everyday things!",
        authors:{},
        description:"Whatt! It's already 8:00 am. Should I get a shower or grab my breakfast? Should I use perfume or deodorant? Should I have a coffee or not? Oh, God! The never-ending list of questions has always been overwhelming. But how to ask the correct question? Is there any optimal way to judge a question and then its decision? Hold on a sec! Kharagpur Data Analytics Group has answers to all your fussy questions. How? Well, we know an excellent Non-Parametric Supervised method that will help you out here called the Decision Trees! Take a look at the blog for more insights",
        tag:["decision tree", "machine learning", "algorithm, data science", "AI"],
        link:"https://kdagiit.medium.com/decision-trees-just-the-everyday-things-d41056e77ff2",
        date:"8 Sep, 2021"
    },
    {
        index:"2",
        img: img2,
        topic:"AI Weekly Series",
        title:"Naive Bayes Algorithm",
        authors:{},
        description:"We all have missed life-changing opportunities there, be it winning a lottery worth lakhs of rupees or emails that claim to fulfill your wishes. Well, for a fact we all know that it's a scam. But ever wondered how the email knows about it and puts such “scam” looking mails in a separate folder so that you aren’t bothered by them. The underlying principle is pretty simple NAIVE BAYES and unique in its own way as it uses the basic Bayes theorem of conditional probability. Take a look at the blog for more insights",
        tag:["AI", "data science", "machine learning", "bayesian machine learning", "algorithm"],
        link:"https://kdagiit.medium.com/naive-bayes-algorithm-4b8b990c7319",
        date:"26 Sep, 2021"
    },
    {
        index:"1",
        img: img1,
        topic:"AI Weekly Series",
        title:"How to win a data science hackathon",
        authors:{},
        description:"When it comes to hackathons, there are certain habits and routines that set the top teams apart from the rest. Of course, you’d want to know what you could do to boost your productivity by such margins. Look no further, hop right into this blog by Kharagpur Data Analytics Group and elevate your chances of acing hackathons Take a look at the blog for more insights",
        tag:["AI", "data science", "hackathons", "winning", "teamwork"],
        link:"https://kdagiit.medium.com/how-to-win-a-data-science-hackathon-702bacbe8d16",
        date:"8 Oct, 2021"
    },
    {
        index:"10",
        img: img9,
        topic:"AI Weekly Series",
        title:"Bagging and Random Forests: Reducing Bias and variance using Randomness",
        authors:{},
        description:"It is better to be approximately right than precisely wrong. After getting a glimpse of various ML algorithms like decision trees and K-nearest neighbors, let’s address the main issue in these algorithms ‘Overfitting'",
        tag:["Data Science", "Machine Learning", "Artificial Intelligence", "Random Forest", "Ensemble Learning"],
        link:"https://kdagiit.medium.com/bagging-and-random-forests-reducing-bias-and-variance-using-randomness-8d516214fe7f",
        date:"4 Dec,2021"
    },

];

export default blogs;
