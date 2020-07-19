#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    N = int(input())
    for i in range(1, 11):
        print(str(N) + " x " + str(i) + " = " + str(N * i))