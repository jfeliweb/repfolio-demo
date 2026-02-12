'use client';

import { useEffect, useRef } from 'react';

const PLOTLY_SCRIPT = 'https://cdn.plot.ly/plotly-3.1.1.min.js';

// Repfolio colors: fern-600, brightFern-600, yellowGreen-500
const FERN_600 = 'rgb(70, 134, 87)';
const BRIGHT_FERN_600 = 'rgb(67, 157, 47)';
const YELLOW_GREEN_500 = 'rgb(161, 230, 25)';

export function SkillProgressionChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadPlotly = (): Promise<{ newPlot: (el: HTMLElement, data: unknown[], layout: unknown, config: unknown) => void; purge?: (el: HTMLElement) => void }> => {
      return new Promise((resolve, reject) => {
        const win = typeof window !== 'undefined' ? (window as unknown as { Plotly?: { newPlot: unknown; purge?: unknown } }) : null;
        if (win?.Plotly) {
          resolve(win.Plotly as { newPlot: (el: HTMLElement, data: unknown[], layout: unknown, config: unknown) => void; purge?: (el: HTMLElement) => void });
          return;
        }
        const script = document.createElement('script');
        script.src = PLOTLY_SCRIPT;
        script.async = true;
        script.onload = () => resolve((window as unknown as { Plotly: { newPlot: (el: HTMLElement, data: unknown[], layout: unknown, config: unknown) => void; purge?: (el: HTMLElement) => void } }).Plotly);
        script.onerror = () => reject(new Error('Failed to load Plotly'));
        document.head.appendChild(script);
      });
    };

    loadPlotly()
      .then((Plotly) => {
        const chartData = [
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Reflexes',
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            y: [78, 82, 85, 88, 90, 92],
            line: { color: FERN_600, width: 3 },
          },
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Positioning',
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            y: [72, 75, 78, 80, 83, 85],
            line: { color: BRIGHT_FERN_600, width: 3 },
          },
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Distribution',
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            y: [65, 68, 70, 73, 76, 78],
            line: { color: YELLOW_GREEN_500, width: 3 },
          },
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Communication',
            x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            y: [75, 78, 80, 83, 86, 88],
            line: { color: FERN_600, width: 3, dash: 'dot' },
          },
        ];

        const layout = {
          title: { text: 'Skill Development Over Time', font: { size: 14 } },
          xaxis: { title: 'Month', showgrid: false },
          yaxis: { title: 'Skill Level (%)', range: [60, 100] },
          margin: { t: 50, r: 20, b: 50, l: 50 },
          plot_bgcolor: 'rgb(244, 241, 241)',
          paper_bgcolor: '#ffffff',
          showlegend: true,
          legend: { orientation: 'h', y: -0.2 },
        };

        const config = {
          responsive: true,
          displayModeBar: false,
          displaylogo: false,
        };

        Plotly.newPlot(container, chartData, layout, config);
      })
      .catch(() => {
        if (container) {
          container.innerHTML =
            '<div class="flex items-center justify-center h-full text-charcoal-700"><p>Chart could not be loaded</p></div>';
        }
      });

    return () => {
      try {
        if (container && typeof (window as unknown as { Plotly?: { purge: (el: HTMLElement) => void } }).Plotly?.purge === 'function') {
          (window as unknown as { Plotly: { purge: (el: HTMLElement) => void } }).Plotly.purge(container);
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return <div ref={containerRef} className="h-[300px]" />;
}
