#!/usr/bin/env node
/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CrossAccountRolesStack } from './src/cdk-stack';
import fs from 'fs';

// Read parameter file
const params = JSON.parse(fs.readFileSync('src/cdk-stack-param.json', 'utf-8'))

// Create App
const app = new cdk.App();
// IAM Roles Stack
new CrossAccountRolesStack(app, 'CrossAccountRolesStack', {
  description: 'Creates Cross Account Role and Cloudformation Execution Roles',
  stackName: 'cf-CrossAccountRolesStack',
  toolsAccountUserArn: params.TOOLS_ACCOUNT_USER_ARN
});
