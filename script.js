function lookup()
{
    let val = document.getElementById("MName").value;
    fetch("movies.json").then(x => x.json()).then(data => {
        for(let index=0; index<data.length; index++)
        {
            if(String(data[index].title).toLowerCase() == String(val).toLowerCase())
            {
                document.getElementById("movie_details").innerHTML = "<tr><th>Title</th><th>Director</th><th>Release Date</th></tr>";
                document.getElementById("movie_details").innerHTML += 
                "<tr><td>"+data[index].title+"</td><td>"+data[index].director+"</td><td>"+data[index].release_date+"</td></tr>";
                break;
            }
            else
            {
                document.getElementById("movie_details").innerHTML = "";
            }
        }
    });
}
document.getElementById("MName").addEventListener("keyup", lookup);