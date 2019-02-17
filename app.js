const KEYWORDS = ['javascript', 'python', 'php', 'machine learning', 'js']

const COURSES = [
    {
        title: "Python Basics",
        source: "TeamTreeHouse",
        url: "http://teamTreeHouse.com/python_basics",
        summary: "This is the course summary.",
        keys: ["python"],
        earned_date: ""
    },
    {
        title: "JavaScript Basics",
        source: "TeamTreeHouse",
        url: "http://teamTreeHouse.com/javascript_basics",
        summary: "This is the course summary.",
        keys: ["javascript", "js"],
        earned_date: ""
    },
    {
        title: "PHP Basics",
        source: "TeamTreeHouse",
        url: "http://teamTreeHouse.com/php_basics",
        summary: "This is the course summary.",
        keys: ["php"],
        earned_date: ""
    },
    {
        title: "Python Advanced",
        source: "TeamTreeHouse",
        url: "http://teamTreeHouse.com/python_advanced",
        summary: "This is the course summary.",
        keys: ["python"],
        earned_date: ""
    },
    {
        title: "The Machine Learning",
        source: "TeamTreeHouse",
        url: "http://teamTreeHouse.com/machine_learning",
        summary: "This is the course summary.",
        keys: ["machine learning"],
        earned_date: ""
    },
];


const search = new Vue({
    el: '#container',
    data: {
        search: '',
        showSearch: false,
        keywords: KEYWORDS,
        all_courses: COURSES,
        matchCourses: [],
        error: false,
        errorMessage: '',
    },
    methods: {
        showCourses: function(){
            //this.matchCourses = [];

            if (!this.search){
                this.errorMessage =  'Look like you forgot to tell me what to search';
                this.error = true;

            } else if (!this.keywords.includes(this.search)){
                this.errorMessage = `I could\'t find any match with "${this.search}"`;
                this.error = true;

            } else {
                this.error = false;

                for (let course of this.all_courses){
                    if (course.keys.includes(this.search.toLowerCase())){
                        this.matchCourses.push(course);
                    }
                }
            }
        }
    },
    computed:{
        listMatches: function() {
            return this.matchCourses.reverse();
        }
    }
});

