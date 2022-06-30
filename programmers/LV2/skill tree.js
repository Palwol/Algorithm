function solution(skill, skill_trees) {
  return skill_trees.filter((tree) => {
    let idx = 0;
    for (const s of tree) {
      const nowIdx = skill.indexOf(s);
      if (nowIdx === idx) {
        idx++;
      } else if (nowIdx > idx) {
        return false;
      }
    }
    return true;
  }).length;
}
