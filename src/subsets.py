def subset(l1,l2,index):
    if index==len(l2):
        return [l1]
    left= subset(l1+[l2[index]],l2,index+1)
    right=subset(l1,l2,index+1)
    return left+right



print(subset([], [1, 2, 3], 0))           


  