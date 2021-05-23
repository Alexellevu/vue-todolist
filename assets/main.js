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
        ],
        tasksCompleted:[]
    },
    methods:
    {
        addTask(){
            if(this.newTask ==='' || this.newTask.length <= 3){
                alert('scrittura errata riprovare')
                
            }else{
            
            this.tasks.push(this.newTask);
            
            }
            return this.newTask;
        },
        
        removeTask(index){
            this.tasks.splice(index, 1);
        },

        changeTask(){
        alert('task updated')
            
        },

        completeTask(index, task){
            this.tasksCompleted.push(task);
            this.tasks.splice(index, 1);
        }

        
    }
})