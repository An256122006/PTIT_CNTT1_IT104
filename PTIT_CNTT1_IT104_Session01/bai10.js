function groupAnagrams(arr) {
    const groups = {};
    arr.forEach(word => {
        const key = word.split('').sort().join('');
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(word);
    }); 
    return Object.values(groups);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));