const list = [
  {
    id:1,
    name:'task1',
    done:false
  },
  {
    id:2,
    name:'task2',
    done:false
  },
  {
    id:3,
    name:'task3',
    done:true
  },
  {
    id:4,
    name:'task4',
    done:false
  },
  {
    id:5,
    name:'task5',
    done:false
  },
  {
    id:6,
    name:'task6',
    done:true
  }
]
export default function getList() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(list)
    },100)
  })
}