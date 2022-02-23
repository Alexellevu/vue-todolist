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
        tasksCompleted:[],
        trashTask:[]
    },
    methods:
    {
        addTask(){
            if(this.newTask ==='' || this.newTask.length < 3){
                alert('scrittura errata riprovare')
                
            }else{
            
            this.tasks.unshift(this.newTask);
            this.newTask = ''
            }
            return this.newTask;
           
        },
        
        removeTask(index,task){
           console.log(task);

           this.trashTask.unshift(task);
              this.tasks.splice(index, 1);
        
          
            
         
        },

        changeTask(){
        alert('task updated')
            
        },

        completeTask(index, task){
            this.tasksCompleted.unshift(task);
            this.tasks.splice(index, 1);
           
        },

        restoreCompleteTask(index, task){
           
            this.tasks.unshift(task);

            this.tasksCompleted.splice(index, 1);
            
        }

        
    }
})