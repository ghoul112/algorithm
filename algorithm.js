// Checkpoint 1
function counter(ch){
    t= ["A", "E", "I", "O", "U"];
    var vow=0;
    var words=1;
    var length=0;
    for (let i = 0; i< ch.length; i++) {
        if(t.indexOf(ch[i].toUpperCase())!=-1){
            vow=vow+1;
        }
        if(ch[i] == " "){
            words=words+1;
        }
        if(ch[i]!=" " && ch[i]!="."){
            length=length+1;
        }
    }
    return "Words : "+words+"\n"+"vowels : "+vow+"\n"+"length : "+length+"\n"

}
// Checkpoint 2
function sort(tab) {
    var len = tab.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
      tmp = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > tmp) {
        tab[j+1] = tab[j]
        j--
      }
      tab[j+1] = tmp
    }
    return tab
  }
// Checkpoint 4
function fibanocci(n,u1,u2){
    if(n==0){
      return u1
    }
    else{
      return fibanocci(n-1,u2,u2+u1)
    }
  
  }
  
  console.log(fibanocci(5,0,1))

// Checkpoint 5
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

function dijkstra(graph, source) {
    const dist = {};
    for (let v in graph) {
        dist[v] = Infinity;
    }
    dist[source] = 0;

    const Q = [source];

    while (Q.length > 0) {
        let Current = Q.shift();

        for (let n in graph[Current]) {
            let d = dist[Current] + graph[Current][n];

            if (d <= dist[n]) {
                dist[n] = d;

                Q.push(n);
                Q.sort((a, b) => dist[a] - dist[b])
            }
        }
    }

    return dist;
}

console.log(dijkstra(graph, 'A'));