import { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    console.log("body:", req.body);
    const input: MemberInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.login(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

export default memberController;
