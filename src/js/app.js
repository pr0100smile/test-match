export default function sortPlayerList(list) {
    return list.sort((a, b) => b.health - a.health);
  }