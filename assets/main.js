const app = new Vue({
    el:'#app',
    
    data:{
        logo: './assets/logo.png',
        el:'#app',
        newTask:'',
        tasks:[
            'learnHTML',
            'learnCSS',
            'learnJS'
        ]
    },
    methods:
    {
        addTask(){
            this.tasks.push(this.newTask);
            
            this.newTask;
        },
        
        removeTask(index){
            this.tasks.splice(index, 1);
        }
    }
})