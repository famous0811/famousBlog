function parseError(e: any) {
    if (e.response) {
      return new Error(e.response);
    }
    console.error(e);
    return new Error("문제가 발생했습니다. 다시 시도해주세요.");
  }
  
  export default parseError;
  