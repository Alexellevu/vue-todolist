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
        tasksConfirm:[]
    },
    methods:
    {
        addTask(){
            
            
            
            if(this.newTask ==='' || this.newTask.length <= 3){
                alert('task errata riprovare')
                
            }else{
            
            this.tasks.push(this.newTask);
            
            }
            return this.newTask;
        },
        
        removeTask(index){
            this.tasks.splice(index, 1);
        },

        change(index){
            console.log(this.task);
            
        }

        
    }
})