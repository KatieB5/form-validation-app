"use client";

import {
  Bar,
  BarChart,
  Label,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/ui/chart";
import { parseDataFromUrl, totalScore } from "./utilFunctions";
import { useSearchParams } from "next/navigation";
import { QuizScoreDataObject } from "./types";
import { boyfriendData, Boyfriend } from "./paragraphs";

const defaultData = {
  quizScoreData: [
    { name: "Rhys", score: 1 },
    { name: "Cassian", score: 1 },
    { name: "Azriel", score: 2 },
    { name: "Tamlin", score: 3 },
    { name: "Lucien", score: 4 },
    { name: "Xaden", score: 5 },
  ],
};

export default function Dashboard() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const parsedData = data ? parseDataFromUrl(data) : defaultData;
  console.log(parsedData);

  const sortedData = parsedData.quizScoreData.sort(
    (a: QuizScoreDataObject, b: QuizScoreDataObject) => b.score - a.score
  );
  console.log(sortedData);

  const totalQuizScore = totalScore(parsedData);
  console.log(totalQuizScore);

  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-3xl tabular-nums">
              Your scores{" "}
            </CardTitle>
            <CardDescription className="pl-1 pb-2">
              For each book boyfriend
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(var(--chart-4))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={parsedData.quizScoreData}
              >
                <Bar
                  dataKey="score"
                  fill="var(--color-steps)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={<ChartTooltipContent hideIndicator />}
                  cursor={false}
                />
                <ReferenceLine
                  y={1200}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Steps"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="12,343"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Based on the data provided, your ideal book boyfriend would be{" "}
              <span className="font-medium text-foreground">{`${sortedData[0].name}`}</span>
              .
            </CardDescription>
          </CardFooter>
        </Card>
      </div>

      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <Card className="max-w-xs" x-chunk="charts-01-chunk-5">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Score percentage</CardTitle>
            <CardDescription>
              See how the book boyfriends ranked according to the
              percentage of your answers that matched to them!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">{`${sortedData[0].name}`}</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  {((sortedData[0].score / totalQuizScore) * 100).toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">{`${sortedData[1].name}`}</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  {((sortedData[1].score / totalQuizScore) * 100).toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">{`${sortedData[2].name}`}</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  {((sortedData[2].score / totalQuizScore) * 100).toFixed(1)}
                  <span className="text-sm font-normal text-muted-foreground">
                    %
                  </span>
                </div>
              </div>
            </div>
            <ChartContainer
              config={{
                bf1: {
                  label: `${sortedData[0].name}`,
                  color: "hsl(var(--chart-1))",
                },
                bf2: {
                  label: `${sortedData[1].name}`,
                  color: "hsl(var(--chart-2))",
                },
                bf3: {
                  label: `${sortedData[2].name}`,
                  color: "hsl(var(--chart-3))",
                },
                bf4: {
                  label: `${sortedData[3].name}`,
                  color: "hsl(var(--chart-4))",
                },
                bf5: {
                  label: `${sortedData[4].name}`,
                  color: "hsl(var(--chart-5))",
                },
                bf6: {
                  label: `${sortedData[5].name}`,
                  color: "hsl(var(--chart-6))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    name: `${sortedData[0].name}`,
                    score: (sortedData[0].score / totalQuizScore) * 100,
                    fill: "var(--color-bf3)",
                  },
                  {
                    name: `${sortedData[1].name}`,
                    score: (sortedData[1].score / totalQuizScore) * 100,
                    fill: "var(--color-bf4)",
                  },
                  {
                    name: `${sortedData[2].name}`,
                    score: (sortedData[2].score / totalQuizScore) * 100,
                    fill: "var(--color-bf5)",
                  },
                  {
                    name: `${sortedData[3].name}`,
                    score: (sortedData[3].score / totalQuizScore) * 100,
                    fill: "var(--color-bf1)",
                  },
                  {
                    name: `${sortedData[4].name}`,
                    score: (sortedData[4].score / totalQuizScore) * 100,
                    fill: "var(--color-bf2)",
                  },
                  {
                    name: `${sortedData[5].name}`,
                    score: (sortedData[5].score / totalQuizScore) * 100,
                    fill: "var(--color-bf6)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="score"
                  tick={false}
                />
                <RadialBar dataKey="score" background cornerRadius={5}/>
                <ChartTooltip
                  defaultIndex={2}
                  content={<ChartTooltipContent />}
                  cursor={false}
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid w-full flex-1 gap-6">
        <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
          <CardHeader className="p-4 pb-0">
            <CardTitle>
              Your book boyfriend: {`${sortedData[0].name}`}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
            <div className="flex items-baseline gap-2 text-sm font-normal text-muted-foreground tabular-nums leading-none">
              <CardDescription>
                {boyfriendData[sortedData[0].name as Boyfriend]}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
