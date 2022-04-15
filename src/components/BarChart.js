import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 20;
      const width = 120;
      const margin = { top: 2, right: 10, bottom: 2, left: 10 };

      const parseYear = d3.timeParse("%Y");
      const length = data.length
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .rangeRound([height - margin.bottom, margin.top]);
      
      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3.axisBottom(x).tickFormat(function(d, i){
            if (i == 0 || i == length-1) {
              return d
            } else {
              return ""
            }
            })
            .tickSize(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.value))
        .attr("height", (d) => {
          return y1(0) - y1(d.value)
        });
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 30,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="x-axis" />
    </svg>
  );
}

export default BarChart;