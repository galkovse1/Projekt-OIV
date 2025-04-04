function drawGraph(mainDomain, trackers) {
  const width = 800;
  const height = 800;

  const graphDiv = document.getElementById("graph");
  graphDiv.innerHTML = "";

  const nodes = [{ id: mainDomain, group: 1 }];
  const links = [];

  trackers.forEach((tracker, index) => {
    nodes.push({ id: tracker, group: 2 });
    links.push({ source: mainDomain, target: tracker });
  });

  const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "linear-gradient(to bottom right, #fdfdfd, #e4e9f0)")
    .style("border", "1px solid #ccc")
    .style("border-radius", "8px");

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg.append("g")
    .attr("stroke", "#bbb")
    .attr("stroke-width", 1.5)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", d => d.group === 1 ? 30 : 10)
    .attr("fill", d => d.group === 1 ? "#4CAF50" : "#f44336")
    .call(drag(simulation));

  const label = svg.append("g")
    .selectAll("text")
    .data(nodes)
    .join("text")
    .text(d => d.id.length > 25 ? d.id.slice(0, 22) + "..." : d.id)
    .attr("font-size", "10")
    .attr("fill", "#333")
    .attr("text-anchor", "middle");

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y - (d.group === 1 ? 40 : 15));
  });

  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
}