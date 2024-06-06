export function maxArea(heights: number[]): number {
    // the max height is defined as 104 in the instructions.
    // use max possible value, instead of finding actual max value of the array (more memory, less cpu consumption)
    const endpoints: number[][] = Array.from({ length: 105 }, () => [-1, -1]);

    let leftMax = -1;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > leftMax) {
            for (let j = leftMax + 1; j <= heights[i]; j++) {
                endpoints[j][0] = i;
            }
            leftMax = heights[i];
        }
    }

    let rightMax = -1;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > rightMax) {
            for (let j = rightMax + 1; j <= heights[i]; j++) {
                endpoints[j][1] = i;
            }
            rightMax = heights[i];
        }
    }

    let maxArea = 0;
    let left = -1, right = -1;
    for (let i = rightMax; i > 0; i--) { // at this point leftMax and rightMax are equal
        if (endpoints[i][0] !== left || endpoints[i][1] !== right) {
            const currentArea = i * (endpoints[i][1] - endpoints[i][0]);
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }
            left = endpoints[i][0];
            right = endpoints[i][1];
        }
    }

    return maxArea;
}
