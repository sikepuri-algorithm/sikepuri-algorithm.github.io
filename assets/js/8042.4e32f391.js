"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[8042],{58042:e=>{e.exports=JSON.parse('{"nbformat":4,"nbformat_minor":2,"metadata":{},"cells":[{"metadata":{},"source":["def sum(scores):\\n","    s = 0\\n","    for i in range(len(scores)):\\n","        s += scores[i]\\n","    return s\\n","\\n","\\n","def average_sum(scores):\\n","    s = 0\\n","    for i in range(len(scores)):\\n","        s += sum(scores[i])\\n","    return s / len(scores)\\n","\\n","\\n","SCORES = [[83, 75, 32], [73, 53, 84], [63, 48, 64]]\\n","\\n","print(average_sum(SCORES))"],"cell_type":"code","outputs":[{"output_type":"stream","name":"stdout","text":["191.66666666666666\\n"]}],"execution_count":null}]}')}}]);