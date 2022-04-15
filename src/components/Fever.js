import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface IProps {
    data?: number[];
}

/* Component */
const Fever = (props: IProps) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const height = 30;
                const width = 120;
                const margin = { top: 0, right: 10, bottom: 0, left: 10 };
                
                const svg = d3.select(d3Container.current);

                const data = props.data;

                const parseYear = d3.timeParse("%Y");

                const x = d3
                    .scaleTime()
                    .domain(data.map((d) => {
                        return parseYear(d.year)
                    } ))
                    .range([10, 110]);

              const xAxis = (g) =>
                g.attr("transform", `translate(${margin.left},0)`).call(
                  d3
                    .axisBottom(x)
                    .tickSize(0)
                );
                svg.select(".x-axis").call(xAxis);
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */

        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            width={90}
            height={30}
            ref={d3Container}
        >
        <g className="x-axis" />
        </svg>
        
    );
}

export default Fever;